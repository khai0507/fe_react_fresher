import { IUserTable } from "@/modules/admin/service/types";
import { ProColumns } from "@ant-design/pro-components";


 export  const columnsManagerUser: ProColumns<IUserTable>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'id',
      dataIndex: '_id',
      copyable: true,
      ellipsis: true,
      tooltip: 'xem chi tiết user',
      formItemProps: {
        rules: [{ required: true, message: 'Trường này là bắt buộc' }],
      },
    },
    {
      disable: true,
      title: 'fullName',
      dataIndex: 'fullName',
      filters: true,
      onFilter: true,
     
    },
   
    {
      title: 'phone',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'role',
      dataIndex: 'role',
    
    },
    // {
    //   title: 'Hành động',
    //   valueType: 'option',
    //   key: 'option',
    //   render: (text, record, _, action) => [
    //     <a key="editable" onClick={() => action?.startEditable?.(record.id)}>
    //       Sửa
    //     </a>,
    //     <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
    //       Xem
    //     </a>,
    //     <TableDropdown
    //       key="actionGroup"
    //       onSelect={() => action?.reload()}
    //       menus={[
    //         { key: 'copy', name: 'Sao chép' },
    //         { key: 'delete', name: 'Xóa' },
    //       ]}
    //     />
    //   ],
    // },
  ];
