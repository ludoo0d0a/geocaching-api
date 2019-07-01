export default class GeocachingError extends Error {
  private response: any;

  constructor(message, response) {
    super(message);
    this.response = response;
  }
}
