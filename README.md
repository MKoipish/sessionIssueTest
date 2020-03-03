ZOWE plugin that tries to trigger a race condition between some HTTP-request to a service and ```index.js.map``` request(triggered by browser's dev tools).

**Installation**

* Download this repository.
* Copy file ```sessionIssueTest.json``` to a ZOWE's ```plugin``` directory(invoke ```ant deploy``` in ```zlux-build``` if needed).
* Fix path to plugin in ```sessionIssueTest.json``` if needed.
* From plugin's root directory:
  * ```cd webClient && npm i && npm run build && cd ..```
  * ```cd nodeServer && npm i && npm run build && cd ..```


**How to use it**

* Close dev tools if it was open
* Open plugin. You could see a counter, that should be incremented each time plugin opens(No matter if previous instance is opened or not). First time you should see ```0```
* Close plugin's window and open again. You should see that counter has been incremented.
* Open browser's dev tools
* Open plugin. You *could* see that counter has still the same value as before(Sometimes this behavior is not reproducible, that depends on how fast ```index.js.map``` has been loaded)
* If you observe normal behavior, try to close and open plugin again
