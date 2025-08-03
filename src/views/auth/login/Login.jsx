// project-imoports
import AuthLoginForm from 'sections/auth/AuthLogin';
import { login } from 'services/AuthService';
import { useNavigate } from 'react-router-dom';

// ===========================|| AUTH - LOGIN V1 ||=========================== //

export default function LoginPage() {
  return (
    <div className="auth-main">
      <div className="auth-wrapper v1">
        <div className="auth-form">
          <div className="position-relative">
            <div className="auth-bg">
              <span className="r"></span>
              <span className="r s"></span>
              <span className="r s"></span>
              <span className="r"></span>
            </div>
            <AuthLoginForm link="/register" />
          </div>
        </div>
      </div>
    </div>
  );
}
