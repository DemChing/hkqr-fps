"use strict";Object.defineProperty(exports,"__esModule",{value:!0});let silent=!1;class Response{constructor(){this.error=!1,this.data="Success"}static Silent(){silent=!0}isError(){return this.error}setError(e="",s=!1){if(this.error=!0,this.message=e,delete this.data,!s&&!silent)throw this.message}}exports.default=Response;
//# sourceMappingURL=event.js.map
