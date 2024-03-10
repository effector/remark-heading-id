import { Transformer } from 'unified'
import { Root } from 'mdast'

export interface RemarkHeadingIdOptions {
  defaults?: boolean
  uniqueDefaults?: boolean
}

export function remarkHeadingId(options?: RemarkHeadingIdOptions): Transformer<Root, Root>
