import { Transformer } from 'unified'

export interface RemarkHeadingIdOptions {
  defaults?: boolean
  uniqueDefaults?: boolean
}

export function remarkHeadingId(options?: RemarkHeadingIdOptions): Transformer
