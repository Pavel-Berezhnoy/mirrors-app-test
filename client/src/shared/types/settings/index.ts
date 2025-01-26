export type LayoutTypes = 'masonry' | 'grid'

export type SettingsNavigation = 'load-more' | 'pagination'

export type SettingsTemplate = 'classic' | 'hover'

export type LayoutParam = {
  [key in LayoutTypes]: {
    columns: number
    rows: number
  }
}

export type Layout = {
  current: LayoutTypes
  params: LayoutParam
}

export type Settings = {
  layout: Layout
  navigation: SettingsNavigation
  template: SettingsTemplate
}