let silent=!1;class Response{constructor(){this.error=!1,this.data="Success"}static Silent(){silent=!0}isError(){return this.error}setError(s="",e=!1){if(this.error=!0,this.message=s,delete this.data,!e&&!silent)throw this.message}}export default Response;
//# sourceMappingURL=event.js.map
