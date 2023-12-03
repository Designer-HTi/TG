import { queryAllGroup, queryKeywords } from '@/apis'
import { GroupRes } from '@/apis/types'
import useMonitoringData from '@/store/common/monitoringData'

export const getAllGroupKeyword = async () => {
  const groupList = ref<GroupRes[]>([])
  const keywordsList = ref<string[]>([])

  Promise.all([
    queryAllGroup('-1'),
    queryKeywords({
      chatId: '',
      groupIds: []
    })
  ]).then((res) => {
    if (res[0].code === 'success') {
      groupList.value = groupList.value.concat(res[0].data)
    }
    if (res[1].code === 'success') {
      res[1].data.forEach((v) => {
        keywordsList.value = keywordsList.value.concat(v.keywords)
      })
    }

    const monitoringData = useMonitoringData()
    monitoringData.setGroupList(groupList.value)
    monitoringData.setKeywordsList(Array.from(new Set(keywordsList.value)))
  })
}
