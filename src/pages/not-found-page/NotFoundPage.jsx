import { Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Cтраница, которую вы посетили, не существует."
      extra={
        <button type="primary" onClick={() => navigate("/")}>
          Вернуться на главную
        </button>
      }
    />
  );
}
