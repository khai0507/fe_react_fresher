import { Breadcrumb, theme } from "antd"
import { Content } from "antd/es/layout/layout"

export const ContentAppAdmin = ({children}:{ children: React.ReactNode }) => {

     const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    return (
        <>
         <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' ,}}
          // items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
        </>
    )
}