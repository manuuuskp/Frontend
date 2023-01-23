// 1.Use React.memo(), useMemo(), useCallback() wherever necessary.
// 2.Create multiple chunk files. - SplitChunksPlugin
// 3.mode: "production" - By default webpack it will optimize when we use this.
// 4.dependency optimization - lets say we use "lodash" and we use only 20 out of 100 methods.
// rest 80 methods code is unused and that can be removed from the production code.
// we can use "lodash-webpack-plugin" to remove the unncessary code.

// Another example is moment.js -  we can use "moment-locales-webpack-plugin".

// 5.use React.Fragment whenever necessary to avoid extra containers.
// 6.using throttling and debouncing at possible places. - lodash.debounce , lodash.throttle
// 7.using index as a key should be avoided.
// 8.lazyload images.
// 9.avoid spreading props in a Component because that component might not need the actual props.
// 10.use webworker
// 11.react-virtualized, react-window - to virtualise long list.
// 12.use "webpack-bundle-analyzer" to analyse bundles.
// 13.using server side rendering - next.js
