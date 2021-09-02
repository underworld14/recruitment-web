import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Card, Button } from "antd";
import styles from "../style.module.less";

import PublicLayouts from "app/components/layout/public";

const { Text, Title } = Typography;

const Finish = () => {
  const history = useHistory();
  return (
    <PublicLayouts>
      <div className="page-content">
        <Card bodyStyle={{ padding: "2.5rem 4rem" }}>
          <div className="flex-ver text-center">
            <Title level={4}>
              Selamat kamu berhasil melakukan submit lamaran kerja
            </Title>
            <Text>
              Silahkan cek email anda untuk mendapatkan kode tracking status.
              Download Aplikasi mobile Gawee <br /> tracking system untuk
              memudahkan anda mengetahui status proses rekrutmen anda
            </Text>
            <div className="mt20">
              <Button type="primary" onClick={() => history.push("/career")}>
                Kembali ke halaman utama
              </Button>
            </div>
          </div>
          <div className="flex-ver hor-center">
            <img
              src="/images/client-meeting.png"
              alt="img"
              className={styles.finishImg}
            />
          </div>
        </Card>
      </div>
    </PublicLayouts>
  );
};

export default React.memo(Finish);
