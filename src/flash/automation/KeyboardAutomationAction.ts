/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: KeyboardAutomationAction
module Shumway.AVMX.AS.flash.automation {
  import notImplemented = Shumway.Debug.notImplemented;
  import axCoerceString = Shumway.AVMX.axCoerceString;
  export class KeyboardAutomationAction extends flash.automation.AutomationAction {
    constructor (type: string, keyCode: number /*uint*/ = 0) {
      type = axCoerceString(type); keyCode = keyCode >>> 0;
      super();
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    _keyCode: number /*uint*/;
    keyCode: number /*uint*/;
    // Instance AS -> JS Bindings
  }
}
