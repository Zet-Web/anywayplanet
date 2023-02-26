export const endpoints_app = {
  health: '/health',
  new_version: '/new-version',
}

export const endpoints_auth = {
  login: '/auth/login', //POST
  register: '/auth/register', //POST
  verify: '/auth/verify', //POST
  restore: '/auth/restore', //POST
  refresh_token: '/auth/refreshToken', //POST
}

export const endpoints_user = {
  user: '/user', //for GET, POST and DELETE
  change_password: '/user/changePassword', //POST
  user_agents: '/user/agents', //GET
  user_referrals: '/user/referrals', //GET
}

export const endpoints_game = {
  find_game: '/game', //POST
}

export const endpoints_game_building = {
  create_building: '/game/building/', //POST
  delete_upgrade_building: (id: number) => `/game/building/${id}`, //for POST and DELETE
  use_building: (id: number) => `/game/building/${id}/use`, //POST
  stop_building: (id: number) => `/game/building/${id}/stop`, //POST
  start_building: (id: number) => `/game/building/${id}/start`, //POST
}

export const endpoints_inventory = {
  inventory_items: '/inventory', //GET and POST - create new inventory item
  inventory_item: (id: number) => `/inventory/${id}`, //GET and DELETE
}

export const endpoints_admin = {
  admin_resources: '/admin/resources', //GET
  admin_resource: (resource: string) => `/admin/resources/${resource}`, //GET and PATCH
}

export const endpoints_market = {
  market_items: '/market/items', //GET
  market_address_to_pay: '/market/address-to-pay', //GET
}
