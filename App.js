import HandleScreen from "./HandleScreen";
import { SettingProvider } from "./screens/SettingsScreen/Context";
import { DataProvider } from "./data/dataProvider";
import { DetailJobProvider } from "./screens/JobCompany/Context";
import { NewsProvider } from "./screens/News/Context";
import { FeedbackProvider } from "./screens/Feedback/Context";
import { DataNotifyProvider } from "./screens/Notify/Context";
import { ApproveProvider } from "./screens/ApproveScreen/Context";
import { ManagerDeviceProvider } from "./screens/ManagerDevice/Context";
import { UserProvider } from "./screens/UserConfirm/Context";
import { ITHelpDeskProvider } from "./screens/ITHelpDesk/Context";
import {TimekeepingProvider} from './screens/Timekeeping/Context'
export default function App() {
  return (
    <>
      {/* <StatusBar barStyle={"dark-content"} />  */}
      <UserProvider>
        <SettingProvider>
          <DetailJobProvider>
            <DataProvider>
              <DataNotifyProvider>
                <NewsProvider>
                  <ITHelpDeskProvider>
                    <FeedbackProvider>
                      <ManagerDeviceProvider>
                        <ApproveProvider>
                          <TimekeepingProvider>
                          <HandleScreen />
                          </TimekeepingProvider>
                        </ApproveProvider>
                      </ManagerDeviceProvider>
                    </FeedbackProvider>
                  </ITHelpDeskProvider>
                </NewsProvider>
              </DataNotifyProvider>
            </DataProvider>
          </DetailJobProvider>
        </SettingProvider>
      </UserProvider>
    </>
  );
}
