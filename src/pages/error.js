import { useLocation } from 'react-router';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="text-center">
        <div className="text-danger">
          <i className="bi bi-bug-fill"></i> ERROR
        </div>
        <div>
          URL <code>{useLocation().pathname}</code> is invalid!
        </div>
      </div>
      <Footer />
    </div>
  )
}
