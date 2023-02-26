export const Wallet = (green: any) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 16H13C12.4477 16 12 15.5523 12 15V9C12 8.44772 12.4477 8 13 8H20M20 16C20.5523 16 21 15.5523 21 15V9C21 8.44772 20.5523 8 20 8M20 16V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V8" stroke={green ? "#52FF00" : "white"} stroke-width="1.75" />
      <rect x="14.5" y="10.5" width="3" height="3" rx="1.5" fill={green ? "#52FF00" : "white"} />
    </svg>

  )
}
