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
      {/* -------- FULL-WIDTH NAVBAR -------- */}
      <Header
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          background: "#f1f5ff",
          height: 80,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          padding: "0 40px"
        }}
      >
        {/* Left Logo */}
        <div
          style={{
            color: "#1677ff",
            fontSize: 24,
            fontWeight: 700,
            whiteSpace: "nowrap"
          }}
        >
          Feasibility Tool
        </div>

        {/* Menu */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            marginLeft: 40,
            flex: 1,
            borderBottom: "none",
            fontSize: 16
          }}
          // items={[
          //   { key: "1", label: "Ondernemingen" },
          //   { key: "2", label: "Burgers" },
          //   { key: "3", label: "Verenigingen" },
          //   { key: "4", label: "Overzicht" },
          //   { key: "5", label: "Haalbaarheid & Scorecard" }
          // ]}
        />
      </Header>

      {/* -------- MAIN CONTENT -------- */}
      <Content
        style={{
          maxWidth: 1100,
          margin: "180px auto 0", // extra margin so content is below navbar
          padding: "20px"
        }}
      >
        <Card
          style={{
            borderRadius: 20,
            textAlign: "left",
            padding: 40,
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <Title level={3} style={{ marginBottom: 10 }}>
            Haalbaarheidsanalyse Tool
          </Title>

          <Paragraph style={{ maxWidth: "85%", color: "#555", fontSize: 16 }}>
            Beschrijf uw project en ontvang een gedetailleerde analyse met
            scores op juridische, Europese, technische, uitvoerings- en
            draagvlakfactoren.
          </Paragraph>

          {/* -------- FORM -------- */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: 35 }}
          >
            {/* Email */}
            <Form.Item
              label="Enter your Email Adress"
              name="email"
              rules={[
                { required: true, message: "Email is required." },
                { type: "email", message: "Please enter a valid email." }
              ]}
            >
              <Input
                placeholder="naam@bedrijf.be"
                style={{
                  height: 48,
                  borderRadius: 10,
                  fontSize: 15
                }}
              />
            </Form.Item>

            {/* Upload */}
            <Form.Item
              label="Upload document"
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
                  padding: 25,
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
                width: 180,
                borderRadius: 10,
                fontSize: 16
              }}
            >
              Get Analysis
            </Button>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}
