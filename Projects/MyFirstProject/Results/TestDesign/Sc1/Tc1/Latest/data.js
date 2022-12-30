var DATA={"axeReport":false,"releaseName":"NewRelease","noTests":1,"perfReport":false,"EXECUTIONS":[{"noTests":21,"iterationType":"Single","description":"Test Run","platform":"WIN10","exeTime":"00:02:58","iterations":1,"testcaseName":"Tc1","browser":"Chrome","nopassTests":"21","startTime":"29-Dec-2022 21:06:06.006","endTime":"29-Dec-2022 21:09:05.005","scenarioName":"Sc1","bversion":"108","nofailTests":"0","STEPS":[{"data":[{"data":[{"data":{"stepno":1,"stepName":"Open","tStamp":"29-Dec-2022 21:06:09.009","action":"Open","description":"Opened Url: https:\/\/www.saucedemo.com\/","status":"DONE"},"name":"Open the Url [<Data>] in the Browser","type":"step"},{"data":{"stepno":2,"stepName":"Set","tStamp":"29-Dec-2022 21:06:10.010","action":"Set","description":"Entered Text 'standard_user' on 'Username'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":3,"stepName":"setEncrypted","tStamp":"29-Dec-2022 21:06:10.010","action":"setEncrypted","description":"Entered Encrypted Text SZpqTtjfW+i4z45kdTv2OA== on Password","status":"DONE"},"name":"Enter the Decrypted value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":4,"stepName":"Click","tStamp":"29-Dec-2022 21:06:10.010","action":"Click","description":"Clicking on Login","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"General:Login","description":"","startTime":"29-Dec-2022 21:06:09.009","endTime":"29-Dec-2022 21:06:10.010","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":5,"stepName":"setObjectProperty","tStamp":"29-Dec-2022 21:07:41.041","action":"setObjectProperty","description":"Setting Object Property for #nameofItem with Sauce Labs Bolt T-Shirt for Object [Swag - Add to cart]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":6,"stepName":"Click","tStamp":"29-Dec-2022 21:07:43.043","action":"Click","description":"Clicking on Add to cart","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":7,"stepName":"Click","tStamp":"29-Dec-2022 21:08:19.019","action":"Click","description":"Clicking on Cart Icon","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":8,"stepName":"setObjectProperty","tStamp":"29-Dec-2022 21:08:42.042","action":"setObjectProperty","description":"Setting Object Property for #ItemtoBuy with Sauce Labs Bolt T-Shirt for Object [Swag - Item To Buy]","status":"DONE"},"name":"Set object [<Object>] property  as [<Data>] at runtime","type":"step"},{"data":{"stepno":9,"stepName":"assertElementDisplayed","tStamp":"29-Dec-2022 21:08:42.042","link":"\\img\\Sc1_Tc1_Step-9_21-08-42.png","action":"assertElementDisplayed","description":"Element [Item To Buy] is Displayed","status":"PASS"},"name":"Assert if [<Object>] element is displayed","type":"step"},{"data":{"stepno":10,"stepName":"Click","tStamp":"29-Dec-2022 21:08:44.044","action":"Click","description":"Clicking on Checkout","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"Shopping:Add Items","description":"","startTime":"29-Dec-2022 21:07:38.038","endTime":"29-Dec-2022 21:08:44.044","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":11,"stepName":"addVar","tStamp":"29-Dec-2022 21:08:44.044","action":"AddVar","description":"Variable %var5% added with value 495225","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":12,"stepName":"addVar","tStamp":"29-Dec-2022 21:08:44.044","action":"AddVar","description":"Variable %Fname% added with value Ashish495225","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":13,"stepName":"Set","tStamp":"29-Dec-2022 21:08:45.045","action":"Set","description":"Entered Text 'Ashish495225' on 'First Name'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":14,"stepName":"addVar","tStamp":"29-Dec-2022 21:08:45.045","action":"AddVar","description":"Variable %Lname% added with value Ghosh495225","status":"DONE"},"name":"Add a variable to access within testcase","type":"step"},{"data":{"stepno":15,"stepName":"Set","tStamp":"29-Dec-2022 21:08:45.045","action":"Set","description":"Entered Text 'Ghosh495225' on 'Last Name'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":16,"stepName":"Set","tStamp":"29-Dec-2022 21:08:45.045","action":"Set","description":"Entered Text '495225' on 'Zip\/Postal Code'","status":"DONE"},"name":"Enter the value [<Data>] in the Field [<Object>]","type":"step"},{"data":{"stepno":17,"stepName":"Click","tStamp":"29-Dec-2022 21:08:57.057","action":"Click","description":"Clicking on Continue","status":"DONE"},"name":"Click the [<Object>] ","type":"step"}],"name":"Shopping:CheckoutDetails","description":"","startTime":"29-Dec-2022 21:08:44.044","endTime":"29-Dec-2022 21:08:57.057","type":"reusable","status":"PASS"},{"data":[{"data":{"stepno":18,"stepName":"assertElementTextContains","tStamp":"29-Dec-2022 21:08:58.058","objects":"[{\"area\":\"[95,715,1153,42]\",\"name\":\"Total Price\"}]","link":"\\img\\Sc1_Tc1_Step-18_21-08-58.png","action":"assertElementTextContains","description":"Total Price's Text CONTAINS $17.27 ","status":"PASS"},"name":"Assert if [<Object>]'s Text Contains [<Data>]","type":"step"},{"data":{"stepno":19,"stepName":"Click","tStamp":"29-Dec-2022 21:09:00.000","action":"Click","description":"Clicking on Finish","status":"DONE"},"name":"Click the [<Object>] ","type":"step"},{"data":{"stepno":20,"stepName":"assertElementDisplayed","tStamp":"29-Dec-2022 21:09:00.000","link":"\\img\\Sc1_Tc1_Step-20_21-09-00.png","action":"assertElementDisplayed","description":"Element [Success Message1] is Displayed","status":"PASS"},"name":"Assert if [<Object>] element is displayed","type":"step"},{"data":{"stepno":21,"stepName":"assertElementPresent","tStamp":"29-Dec-2022 21:09:02.002","link":"\\img\\Sc1_Tc1_Step-21_21-09-02.png","action":"assertElementPresent","description":"Element [SuccessMessage2] is Present","status":"PASS"},"name":"Assert if [<Object>] is present","type":"step"}],"name":"Shopping:Finalise","description":"","startTime":"29-Dec-2022 21:08:57.057","endTime":"29-Dec-2022 21:09:05.005","type":"reusable","status":"PASS"}],"name":"Iteration_1","type":"iteration","status":"PASS"}],"status":"PASS"}],"iterationMode":"ContinueOnError","exeTime":"00:02:58","testRun":true,"runConfiguration":"Local","themes":["Amethyst","Coral","Pearl","Sapphire"],"testsetName":"NewTestSet","nopassTests":"1","theme":"Sapphire","startTime":"29-Dec-2022 21:06:06.006","endTime":"29-Dec-2022 21:09:05.005","projectName":"MyFirstProject","maxThreads":1,"bddReport":false,"nofailTests":"0"};