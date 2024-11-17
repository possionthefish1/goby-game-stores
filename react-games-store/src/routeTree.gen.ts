/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const GenreIndexLazyImport = createFileRoute('/genre/')()
const GenreAbcLazyImport = createFileRoute('/genre/abc')()

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

const GenreAbcLazyRoute = GenreAbcLazyImport.update({
  id: '/genre/abc',
  path: '/genre/abc',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/genre/abc.lazy').then((d) => d.Route))

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
    '/genre/abc': {
      id: '/genre/abc'
      path: '/genre/abc'
      fullPath: '/genre/abc'
      preLoaderRoute: typeof GenreAbcLazyImport
      parentRoute: typeof rootRoute
    }
    '/genre/': {
      id: '/genre/'
      path: '/genre'
      fullPath: '/genre'
      preLoaderRoute: typeof GenreIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/genre/abc': typeof GenreAbcLazyRoute
  '/genre': typeof GenreIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/genre/abc': typeof GenreAbcLazyRoute
  '/genre': typeof GenreIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/genre/abc': typeof GenreAbcLazyRoute
  '/genre/': typeof GenreIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/genre/abc' | '/genre'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/genre/abc' | '/genre'
  id: '__root__' | '/' | '/about' | '/genre/abc' | '/genre/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  GenreAbcLazyRoute: typeof GenreAbcLazyRoute
  GenreIndexLazyRoute: typeof GenreIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  GenreAbcLazyRoute: GenreAbcLazyRoute,
  GenreIndexLazyRoute: GenreIndexLazyRoute,
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
        "/genre/abc",
        "/genre/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/genre/abc": {
      "filePath": "genre/abc.lazy.tsx"
    },
    "/genre/": {
      "filePath": "genre/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
