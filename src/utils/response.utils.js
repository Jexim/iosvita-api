export default class ResponseUtils {
    constructor() {
      this.statusCode = null;
      this.type = null;
      this.data = null;
      this.message = null;
    }
  
    setSuccess(statusCode, data, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';

      return this;
    }
  
    setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = 'error';

      return this;
    }
  
    send(res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
      });
    }
  }