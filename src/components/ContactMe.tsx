import { useState } from "react";
import { Button, Form, Input, Typography, message, Card } from "antd";
import { MailOutlined, UserOutlined, SendOutlined } from "@ant-design/icons";
import { Props } from "./FullPage";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactMe = ({ id }: Props) => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form values:", form.getFieldsValue());
      message.success("Message sent successfully!");
      form.resetFields();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div
      id={id}
      className="bg-gray-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="w-full lg:w-2/5">
            <Title
              level={2}
              className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Let's Create{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Something Amazing
              </span>
            </Title>
            <Paragraph className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life.
            </Paragraph>
            <Card
              className="hover:shadow-lg transition-shadow duration-300"
              hoverable>
              <Title level={4}>Quick Contact</Title>
              <Paragraph>Drop me a line at:</Paragraph>
              <a
                href="mailto:nyanlinhtoo.ygn@gmail.com"
                className="text-purple-600 dark:text-purple-400 hover:underline text-lg font-medium">
                nyanlinhtoo.ygn@gmail.com
              </a>
            </Card>
          </div>

          <div className="w-full lg:w-3/5">
            <Card className="shadow-xl">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-6">
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}>
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="Your Name"
                    className="rounded-md py-2"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    {
                      type: "email",
                      message: "Please enter a valid email address.",
                    },
                  ]}>
                  <Input
                    prefix={<MailOutlined className="text-gray-400" />}
                    placeholder="Your Email"
                    className="rounded-md py-2"
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message!" },
                  ]}>
                  <TextArea
                    placeholder="Your Message"
                    rows={4}
                    className="rounded-md"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SendOutlined />}
                    loading={isSubmitting}
                    className="w-full bg-purple-600 hover:!bg-purple-700 border-purple-600 hover:!border-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
