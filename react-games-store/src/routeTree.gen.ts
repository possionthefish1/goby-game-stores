/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminUsersUserIdImport } from './routes/admin/users/$userId'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const GenreIndexLazyImport = createFileRoute('/genre/')()
const AdminUsersIndexLazyImport = createFileRoute('/admin/users/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const GenreIndexLazyRoute = GenreIndexLazyImport.update({
  id: '/genre/',
  path: '/genre/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/genre/index.lazy').then((d) => d.Route))

const AdminUsersIndexLazyRoute = AdminUsersIndexLazyImport.update({
  id: '/admin/users/',
  path: '/admin/users/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/users/index.lazy').then((d) => d.Route),
)

const AdminUsersUserIdRoute = AdminUsersUserIdImport.update({
  id: '/admin/users/$userId',
  path: '/admin/users/$userId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/genre/': {
      id: '/genre/'
      path: '/genre'
      fullPath: '/genre'
      preLoaderRoute: typeof GenreIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/users/$userId': {
      id: '/admin/users/$userId'
      path: '/admin/users/$userId'
      fullPath: '/admin/users/$userId'
      preLoaderRoute: typeof AdminUsersUserIdImport
      parentRoute: typeof rootRoute
    }
    '/admin/users/': {
      id: '/admin/users/'
      path: '/admin/users'
      fullPath: '/admin/users'
      preLoaderRoute: typeof AdminUsersIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/genre': typeof GenreIndexLazyRoute
  '/admin/users/$userId': typeof AdminUsersUserIdRoute
  '/admin/users': typeof AdminUsersIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/genre': typeof GenreIndexLazyRoute
  '/admin/users/$userId': typeof AdminUsersUserIdRoute
  '/admin/users': typeof AdminUsersIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/genre/': typeof GenreIndexLazyRoute
  '/admin/users/$userId': typeof AdminUsersUserIdRoute
  '/admin/users/': typeof AdminUsersIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/genre' | '/admin/users/$userId' | '/admin/users'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/genre' | '/admin/users/$userId' | '/admin/users'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/genre/'
    | '/admin/users/$userId'
    | '/admin/users/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  GenreIndexLazyRoute: typeof GenreIndexLazyRoute
  AdminUsersUserIdRoute: typeof AdminUsersUserIdRoute
  AdminUsersIndexLazyRoute: typeof AdminUsersIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  GenreIndexLazyRoute: GenreIndexLazyRoute,
  AdminUsersUserIdRoute: AdminUsersUserIdRoute,
  AdminUsersIndexLazyRoute: AdminUsersIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/genre/",
        "/admin/users/$userId",
        "/admin/users/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/genre/": {
      "filePath": "genre/index.lazy.tsx"
    },
    "/admin/users/$userId": {
      "filePath": "admin/users/$userId.tsx"
    },
    "/admin/users/": {
      "filePath": "admin/users/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
