import { RouteObject } from "react-router-dom";
import { MAIN_ROUTE, CATEGORY_ROUTE} from "../utils/consts";
import MainPage from '../pages/MainPage/MainPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage'

export const routes: RouteObject[] = [
  {
    path: MAIN_ROUTE,
    element: <MainPage/>,
  },
  {
    path: CATEGORY_ROUTE,
    element: <CategoryPage />,
  },
];
