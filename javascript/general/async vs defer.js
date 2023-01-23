// Async and defer - both are used to load the HTML without blocking.
// The main difference between the async and defer is that deferred scripts will be loaded at last.
// i.e it will be loaded once the HTML is parsed.
// Whereas the Async scripts will be loaded parallelly when the HTML parses. It doesnt wait for the HTML.

// The main advantage is that both will not block the HTML from parsing.

// The disadvantage is that :
// defer:
//  if there are too many deffered scripts it will take some time to load the scripts once the HTML is parsed.
//  Older browsers might not support defer.

// Async:
//  if there are scripts that are dependent on the DOM then using Async is not possible.
