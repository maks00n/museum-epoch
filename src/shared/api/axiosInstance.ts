import axios from 'axios'

const serverUrl = 'https://api.diveevskiy-museum-history.itlabs.top'

export const axiosInstance = axios.create({
  baseURL: serverUrl + "/api",
  headers: {
    'Content-type': 'application/json'
  }
})

export const getHistoryPeriods = async () => {
  const { data } = await axiosInstance.get('/history_periods')
  return data
}

export const getArchivePhotos = async () => {
  const { data } = await axiosInstance.get('/archive_photos')
  data.forEach((item: any) => item.image = serverUrl + item.image)
  return data
}

export const getArchiveVideos = async () => {
  const { data } = await axiosInstance.get('/archive_videos')
  data.forEach((item: any) => item.video = serverUrl + item.video)
  return data
}

export const getHistoryItems = async () => {
  const { data } = await axiosInstance.get('/history_items')
  data.forEach((item: any) => item.image = serverUrl + item.image)
  return data
}

export const getCitizens = async () => {
  const { data } = await axiosInstance.get('/citizens')
  data.forEach((item: any) => {
    item.image = serverUrl + item.image
    item.title = item.lastName + ' ' + item.firstName + ' ' + item.patronymic
  })
  return data
}