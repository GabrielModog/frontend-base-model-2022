import axios, { AxiosInstance, AxiosResponse } from 'axios'

type url = string

type API_GET_URLS = '/users' | '/hello'
type API_POST_URLS = '/'

type API_ENDPOINTS = API_GET_URLS | API_POST_URLS

const HOST_URL_API = process.env.HOST_URL_API || ''

export type HelloResponse = {
  message: string
}

export const API_ROUTES_URL =
  process.env.NODE_ENV === 'production' ? HOST_URL_API : 'http://localhost:3000/api'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    })

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }

  private _handleResponse = ({ data }: AxiosResponse) => data

  protected _handleError = (error: any) => Promise.reject(error)
}

class MainApi extends HttpClient {
  public constructor(baseUrl: string) {
    super(baseUrl)
  }

  public get = (url: API_GET_URLS) => this.instance.get(url)
  public post = <T>(url: API_POST_URLS, ...args: any[]) => this.instance.post<T>(url, ...args)
}

class NextApiRoutes extends HttpClient {
  public constructor(baseUrl: string) {
    super(baseUrl)
  }

  public get = (url: API_GET_URLS) => this.instance.get(url)
  public post = <T>(url: API_POST_URLS, ...args: any[]) => this.instance.post<T>(url, ...args)

  public getHello = () => this.instance.get(`/hello`)
}

const http = new MainApi('http://...')

export const api = new NextApiRoutes(API_ROUTES_URL)

export default http
