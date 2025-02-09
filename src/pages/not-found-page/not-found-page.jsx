import { useNavigate } from 'react-router-dom'
import { Result } from 'antd'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
      <Result
        status="404"
        title="404"
        subTitle="Cтраница, которую вы посетили, не существует."
        extra={
          <button type="primary" onClick={() => navigate('/')}>
            Вернуться на главную
          </button>
        }
      />
  );
}
