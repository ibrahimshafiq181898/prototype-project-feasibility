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
    beforeUpload: () => false // stop auto-upload
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
    <Layout>
      {/* ---- NAVBAR ---- */}
      <Header
        style={{
          background: "#1677ff",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          height: 64
        }}
      >
        <div style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
          Feasibility Tool
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            background: "transparent",
            marginLeft: 40,
            flex: 1,
            minWidth: 0
          }}
          //   items={[
          //     { key: "1", label: "Ondernemingen" },
          //     { key: "2", label: "Burgers" },
          //     { key: "3", label: "Verenigingen" },
          //     { key: "4", label: "Overzicht" },
          //     { key: "5", label: "Haalbaarheid & Scorecard" }
          //   ]}
        />
      </Header>

      {/* ---- MAIN CONTENT ---- */}
      <Content
        style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}
      >
        <Card
          style={{
            borderRadius: 8,
            padding: 20,
            border: "1px solid #d9d9d9"
          }}
        >
          <Title level={3}>Haalbaarheidsanalyse Tool</Title>

          <Paragraph style={{ maxWidth: "80%" }}>
            Gebruik deze tool om de haalbaarheid van uw vereenvoudigingsproject
            te analyseren. Beschrijf uw project en ontvang een gedetailleerde
            analyse met scores op juridische, Europese, technische, uitvoerings-
            en draagvlakfactoren.
          </Paragraph>

          {/* ---- FORM ---- */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ marginTop: 30 }}
          >
            {/* Email field */}
            <Form.Item
              label="Uw e-mailadres"
              name="email"
              rules={[
                { required: true, message: "Email is verplicht." },
                { type: "email", message: "Voer een geldig emailadres in." }
              ]}
            >
              <Input placeholder="naam@bedrijf.be" />
            </Form.Item>

            {/* Drag & Drop Upload */}
            <Form.Item
              label="Upload uw projectdocument(en)"
              name="files"
              rules={[
                {
                  required: true,
                  message: "Gelieve minstens één bestand te uploaden."
                }
              ]}
            >
              <Dragger {...draggerProps} style={{ padding: 20 }}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined style={{ color: "#1677ff" }} />
                </p>
                <p className="ant-upload-text">
                  Klik of sleep bestanden om te uploaden
                </p>
                <p className="ant-upload-hint">
                  Ondersteunt meerdere bestanden. Bestanden worden niet
                  automatisch geüpload.
                </p>
              </Dragger>
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{ marginTop: 15 }}
            >
              Analyse uitvoeren
            </Button>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}
