import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  GALLERY_ROUTE,
  LOGIN_ROUTE,
  PHOTO_ITEM_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";
import Gallery from "./pages/Gallery";
import Auth from "./pages/Auth";
import PhotoPage from "./pages/PhotoPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: GALLERY_ROUTE,
    Component: Gallery,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PHOTO_ITEM_ROUTE + "/:id",
    Component: PhotoPage,
  },
];
