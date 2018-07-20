var perfetto = (function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var state = createCommonjsModule(function (module, exports) {
	// Copyright (C) 2018 The Android Open Source Project
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(exports, "__esModule", { value: true });
	function createEmptyState() {
	    return {
	        i: 0,
	    };
	}
	exports.createEmptyState = createEmptyState;

	});

	unwrapExports(state);
	var state_1 = state.createEmptyState;

	var controller = createCommonjsModule(function (module, exports) {
	// Copyright (C) 2018 The Android Open Source Project
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	Object.defineProperty(exports, "__esModule", { value: true });

	const state$$1 = state.createEmptyState();
	function main() {
	    // TODO(hjd): Compile this with the worker lib.
	    // tslint:disable-next-line no-any
	    self.onmessage = (_) => {
	        state$$1.i++;
	        // TODO(hjd): Compile this with the worker lib.
	        // tslint:disable-next-line no-any
	        self.postMessage(state$$1);
	    };
	}
	main();

	});

	var index = unwrapExports(controller);

	return index;

}());
//# sourceMappingURL=controller_bundle.js.map
