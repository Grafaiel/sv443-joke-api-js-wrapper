import { Response } from "node-fetch"
import { LanguageCode, ResponseFormat } from "./../types"
import { makeRequestToApi } from "./helper"

export type FormatReqOptions = {
	format?: ResponseFormat
	lang?: LanguageCode
}

/**
 * Fetches available response formats on the api
 */
export function getFormats(options: FormatReqOptions = {}): Promise<Response> {
	return makeRequestToApi("formats", options)
}
