import Header from '@/components/layout/Header';
import RevisionPanel from '@/components/RevisionPanel';
import Sidebar from '@/components/Sidebar';
import Viewer from '@/components/Viewer';
import { useEffect } from 'react';
import { useMetadataActions, useMetadataStore } from './store/useMetadataStore';

function App() {
  const { isLoading, error } = useMetadataStore();
  const { setMetadata, setLoading, setError } = useMetadataActions();

  useEffect(() => {
    setLoading(true);

    fetch('/metadata.json')
      .then((response) => response.json())
      .then((data) => {
        setMetadata(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [setMetadata, setLoading, setError]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러: {error.message}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header>
        <h1 className="text-xl font-bold ml-2">건설 도면 탐색기</h1>
      </Header>

      <div className="flex flex-1 justify-between">
        <Sidebar />
        <Viewer />
        <RevisionPanel />
      </div>
    </div>
  );
}

export default App;
