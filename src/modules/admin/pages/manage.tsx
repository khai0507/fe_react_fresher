import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useRef } from 'react';

export type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: { name: string; color: string }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const Manager = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<GithubIssueItem>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tooltip: 'Tiêu đề quá dài sẽ tự động rút gọn',
      formItemProps: {
        rules: [{ required: true, message: 'Trường này là bắt buộc' }],
      },
    },
    {
      disable: true,
      title: 'Trạng thái',
      dataIndex: 'state',
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        all: { text: 'Tất cả' },
        open: { text: 'Chưa giải quyết', status: 'Error' },
        closed: { text: 'Đã giải quyết', status: 'Success', disabled: true },
        processing: { text: 'Đang xử lý', status: 'Processing' },
      },
    },
    {
      disable: true,
      title: 'Nhãn',
      dataIndex: 'labels',
      search: false,
      render: (_, record) => (
        <Space>
          {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Ngày tạo',
      key: 'showTime',
      dataIndex: 'created_at',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: 'Khoảng thời gian',
      dataIndex: 'created_at',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => ({ startTime: value[0], endTime: value[1] }),
      },
    },
    {
      title: 'Hành động',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a key="editable" onClick={() => action?.startEditable?.(record.id)}>
          Sửa
        </a>,
        <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
          Xem
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: 'Sao chép' },
            { key: 'delete', name: 'Xóa' },
          ]}
        />
      ],
    },
  ];

  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      rowKey="id"
      headerTitle="Danh sách Issue"
      // Fix lỗi request: Dùng chuẩn fetch hoặc đổi thành file api service của cậu
      request={async (params) => {
        try {
          const query = new URLSearchParams(params as any).toString();
          const res = await fetch(`https://proapi.azurewebsites.net/github/issues?${query}`);
          const data = await res.json();
          return {
            data: data.data || data,
            success: true,
          };
        } catch (error) {
          return { data: [], success: false };
        }
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-issues',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
      }}
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
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