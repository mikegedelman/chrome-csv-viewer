# Chrome CSV Extension

Ability view, graph and explore CSV files in browser by right-clicking any link.

Notice this currently won't work for pasted URLs.

# Usage

For now clone this repo, then issue the following two commands to pull dependencies:

```
git submodule init
git submodule update
```

Then go to chrome://extensions, check "Developer mode" and do "Load unpacked extension..." and point it to the directory you cloned into.


# Some Developer Notes

Original author is trying to catch every time a CSV would be downloaded in Chrome and display it, which would certainly be ideal. Unfortunately it isn't working too well at the moment.

To circumvent this I simply added a conext menu item on links that opens the CSV in a new tab.

Eventually I'd like to add some more features to the CSV viewer itself and possibly give a shot at displaying ALL CSVs instead of downloading them.

# Building

To build the ZIP file for the Chrome webstore do:

    ./make

ZIP file will be in dist

# Copyright & License

Note: this copyright from forked repo, think I'm supposed to keep it here but please
contact me if I need to do otherwise.

Copyright 2012-2013 Rufus Pollock. Note that this utilizes various third-party
libraries which may be differently licensed.

Licensed under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
