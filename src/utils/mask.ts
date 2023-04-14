function dateMask(value: string): string {
  // removes everything that is not a number
  value = value.replace(/\D/g, "");

  // regex to format date in dd/mm/yyyy format
  const regex = /(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])(\d{4}$)/;

  // Format for date: dd/mm/yyyy
  value = value.replace(regex, "$1/$2/$3");

  return value;
}

function hourMask(value: string): string {
  // removes everything that is not a number
  value = value.replace(/\D/g, "");

  // regex to format time in HH:mm format
  const regex = /^([0-1]?[0-9]|2[0-3])([0-5][0-9]$)/;

  // Format for hour: HH:mm
  value = value.replace(regex, "$1:$2");

  return value;
}

export { dateMask, hourMask };
