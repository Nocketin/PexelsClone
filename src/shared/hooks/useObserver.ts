import React, { useEffect, useRef } from 'react'

export const useObserver = (
    ref: React.RefObject<Element | null>,
    canLoad: boolean,
    isLoading: boolean,
    callback: () => void
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect();
        if(!ref.current) return;

        const cb = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading, callback, canLoad, ref]);
} 
 