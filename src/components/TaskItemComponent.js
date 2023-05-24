import { Button, Checkbox, List, Space } from 'antd'
import React, {useState} from 'react'

function TaskItemComponent(props) {
  const { item, index, onDelete, onCompleted } = props
  
  return (
    <List.Item
      actions={[
        <Button
          onClick={() => onDelete(index)}
          size="small"
          danger
          type="primary"
        >
          Del
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={
          <Checkbox onChange={() => onCompleted(index)}>{item.task}</Checkbox>
        }
        description={`Task ID: ${item.id}`}
      />
    </List.Item>
  )
}

export default TaskItemComponent
