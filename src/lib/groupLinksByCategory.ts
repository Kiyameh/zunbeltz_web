export type LinkItem = {
  category: string
  link: string
  name: string
}

export function groupLinksByCategory(links: LinkItem[]): {
  [key: string]: {link: string; name: string}[]
} {
  const result: {[key: string]: {link: string; name: string}[]} = {}

  links.forEach((item) => {
    if (!result[item.category]) {
      result[item.category] = []
    }
    result[item.category].push({link: item.link, name: item.name})
  })

  return result
}
