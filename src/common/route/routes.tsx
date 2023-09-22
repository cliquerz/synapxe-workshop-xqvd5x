import { RouteObject } from 'react-router-dom';

import { PATHS } from './paths';
import Home from '@/features/Home';

export const ROUTES: RouteObject[] = [
  {
    path: PATHS.ROOT.path,
    element: <Home />,
    handle: {
      key: PATHS.ROOT.path,
      displayTitle: 'Home',
    },
  },
];
