import { List } from './list'
import { SearchPanel } from './search-panel'
import { useState, useEffect } from 'react'
import { clearObject, useDebounce, useMount } from 'utils'
import { useHttp } from 'utils/http'

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const debouncedParam = useDebounce(param, 200)
  const [list, setList] = useState([])
  const client = useHttp()

  useEffect(() => {
    client('projects', { data: clearObject(debouncedParam) }).then(setList)
  }, [client, debouncedParam])

  useMount(() => {
    client('users').then(setUsers)
  })

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
