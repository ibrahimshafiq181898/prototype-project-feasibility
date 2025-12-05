import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  message,
  Typography,
  Card,
  Layout,
  Menu
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Paragraph } = Typography;
const { Dragger } = Upload;
const { Header, Content } = Layout;

export default function FeasibilityTool() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const draggerProps = {
    name: "file",
    multiple: true,
    beforeUpload: () => false
  };

  const onFinish = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      message.success("Analysis completed successfully!");
      console.log("submitted values:", values);
    }, 1000);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffffff)"
      }}
    >
      <Header
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          background: "#f1f5ff",
          height: 70,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          justifyContent: "space-between",
          gap: 10,
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            color: "#1677ff",
            fontSize: 20,
            fontWeight: 700,
            whiteSpace: "nowrap"
          }}
        >
          Feasibility Tool
        </div>

        <div style={{ display: "none" }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              borderBottom: "none"
            }}
          />
        </div>
      </Header>

      <Content
        style={{
          maxWidth: 1100,
          margin: "130px auto 0",
          padding: "15px"
        }}
      >
        <Card
          style={{
            borderRadius: 20,
            textAlign: "left",
            padding: "25px 25px",
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.05)",
            width: "100%"
          }}
        >
          <Title
            level={3}
            style={{
              marginBottom: 10,
              fontSize: "1.6rem"
            }}
          >
            Haalbaarheidsanalyse Tool
          </Title>

          <Paragraph
            style={{
              maxWidth: "100%",
              color: "#555",
              fontSize: 15,
              lineHeight: 1.6
            }}
          >
            Beschrijf uw project en ontvang een gedetailleerde analyse van de
            haalbaarheid van uw project met informatie over mogelijke
            juridische, EU, technische, implementatie en draagvlak
            aandachtspunten.
          </Paragraph>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: 30 }}
          >
            <Form.Item
              label="Voer uw e-mailadres in"
              name="email"
              rules={[
                { required: true, message: "Email is required." },
                { type: "email", message: "Please enter a valid email." }
              ]}
            >
              <Input
                placeholder="naam@bedrijf.be"
                style={{
                  height: 45,
                  borderRadius: 10,
                  fontSize: 15
                }}
              />
            </Form.Item>

            {/* Upload */}
            <Form.Item
              label="Document uploaden"
              name="files"
              rules={[
                {
                  required: true,
                  message: "Upload minstens één bestand."
                }
              ]}
            >
              <Dragger
                {...draggerProps}
                style={{
                  padding: 20,
                  borderRadius: 14,
                  border: "2px dashed #91caff",
                  background: "#f0f7ff"
                }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined style={{ color: "#1677ff" }} />
                </p>
                <p className="ant-upload-text">
                  Klik of sleep bestanden om te uploaden
                </p>
                <p className="ant-upload-hint" style={{ color: "#555" }}>
                  Ondersteunt meerdere bestanden.
                </p>
              </Dragger>
            </Form.Item>

            {/* Button */}
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                marginTop: 20,
                height: 50,
                width: "100%", 
                maxWidth: 220, 
                borderRadius: 10,
                fontSize: 16
              }}
            >
              Voer analyse uit
            </Button>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}
