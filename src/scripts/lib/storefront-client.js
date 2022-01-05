export default class StorefrontClient {
  constructor ({ shop = '', accessToken = '' }) {
    this.accessToken = accessToken
    this.shop = shop
    this.endpoint = `https://${shop}.myshopify.com/api/graphql`
    this.method = 'POST'
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Shopify-Storefront-Access-Token': this.accessToken
    }
  }

  fetch ({ query = '', variables = {} }) {
    return fetch(this.endpoint, {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    })
      .then(response => response.json())
  }
}
