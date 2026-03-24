import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef } from 'react';
import { IUserTable } from '../../service/types';
import { columnsManagerUser } from './hook/useColumns';
import { getListUserApi } from '../../service/api';



const Manager = () => {
  const actionRef = useRef<ActionType>();

 


  return (
    <ProTable<IUserTable>
      columns={columnsManagerUser}
      actionRef={actionRef}
      cardBordered
      rowKey="_id"
      headerTitle="Danh sách user"
      request={async (params) => {
        try {
          console.log(params)
          const  dataListUser  = await getListUserApi(params?.current ??1 , params?.pageSize ?? 10 )
          return {
            data: dataListUser.data?.result || [],
            total: Number(dataListUser.data?.meta?.total || 0),
          };
        } catch (error) {
          return {
             data: [], success: false
            

           };
          
        }
      }}

      pagination={{
        pageSize: 10,
       showSizeChanger: true,

      }}
     
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => actionRef.current?.reload()}
          type="primary"
        >
          Thêm mới
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              { label: 'Tuỳ chọn 1', key: '1' },
              { label: 'Tuỳ chọn 2', key: '2' },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};

export default Manager;