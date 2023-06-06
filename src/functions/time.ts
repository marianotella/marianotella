export const getYearsFromDate = (time: string) => {
  const birthdate = new Date(time)
  const diff = birthdate.getTime() - Date.now()

  return Math.abs(Math.ceil(diff / 1000 / 60 / 60 / 24 / 365))
}
