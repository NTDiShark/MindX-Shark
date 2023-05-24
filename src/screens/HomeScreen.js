import { Button, Card, Divider, Input, List, Space, message } from 'antd'

import { ListTaskComponent, TaskItemComponent } from '../components'

import React, {useState} from 'react'

function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [content, setContent] = useState('');
  const [idTask, setIdTask] = useState(0);
  
  const handleAddNewTask = () => {
    if (!content) {
      message.error('Please enter task!')
    } else {
      const items = [...tasks, {
        id: idTask +1,
        isCompleted: false,
        task: content 
      }]
        setIdTask(idTask+1)
        setTasks(items)
        setContent('')}
  }

  const deleteTask = (index) => {
    if(window.confirm("Do you want to delete this task?")) {
      const a1 = tasks.slice(0,index)
      const a2 = tasks.slice(index+1, tasks.length)
      const newTasks = a1.concat(a2)
      setTasks(newTasks)
    } 
  }

  return (
    <div className="col-8 offset-2 mt-4" style={{ padding: 20 }}>
      <Card title="Todo list" size="small" className="mt-4">
        <Input
          placeholder="Add new task"
          size="large"
          allowClear
          value={content}
          onChange={(val) => setContent(val.target.value)}
          onPressEnter={handleAddNewTask}
        />
        <Divider />

        <ListTaskComponent>
          {tasks.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={tasks}
              renderItem={(item, index) => (
                <TaskItemComponent
                  item={item}
                  index={index}
                  onDelete={(index) => deleteTask(index)}
                  onCompleted={(index) =>
                    message.info(`Change task state to is completed`)
                  }
                />
              )}
            />
          ) : null}
        </ListTaskComponent>
      </Card>
    </div>
  )
}

export default HomeScreen
