const messages = {
    English: {
        message: {
			//Header
			disconnect:'Disconnect',
			connect:'Connect',
			OFF:'OFF',
			ON:'ON',
			Pause:'Pause',
		    Run:'Run',			
			Stop:'Stop',		
			Auto:'Auto',
			T1:'T1',
			T2:'T2',
			T:'T',
			U:'U',
			S:'S',
			
			// Header-Tool Panel
			jog_Tool:'Jog Tool',
			point_Tool:'Point Tool',
			execution_Tool:'Execution Tool',
			monitor_Tool:'Monitor Tool',
			dio_Tool:'DIO Tool',
			J1:'J1',
			J2:'J2',
			J3:'J3',
			J4:'J4',
			J5:'J5',
			J6:'J6',
			MovP:'MovP',
			MovL:'MovL',
			Start:'Start',
			user_DI:'User DI',
			user_DO:'User DO',
			
			//Monitor
			Basic:'Basic',
			Alarm:'Alarm',
			History:'History',
			Scope:'Scope',
			Cartesian:'Cartesian',
			
			// Monitor - Basic
			Cartesian:'Cartesian',
			mm:'mm',
			Vel:'Vel.',
			X:'X',
			Y:'Y',
			Z:'Z',	
			RX:'RX',
			RY:'RY',
			RZ:'RZ',
			Joint:'Joint',
			PUU:'PUU',
			Deg:'Deg',
			RPM:'RPM',
			Trq:'Trq.',
			Temp:'Temp.',	
			
			controller_Information:'Controller Information',
			Version:'Version',
			release_Date:'Release Date',
			
			//Monitor - Alarm
			Monitor:'Monitor',
			Controller:'Controller',
			Group:'Group',
			Warming:'Warming',
			Tips:'Tips',
			Clear:'Clear',
			
			//Monitor-History
			Update:'Update',
			
			//Monitor-Scope
			Save:'Save',
			Load:'Load',
			Clear:'Clear',
			Joint:'Joint',
			Interval:'Interval',
			CH1:'CH1',
			CH2:'CH2',
			CH3:'CH3',
			CH4:'CH4',
			CH5:'CH5',
			CH6:'CH6',
			CH7:'CH7',			
			CH8:'CH8',	

            // Project
      		Files:'Files',
			Point:'Point',			
			Editor:'Editor',
			
			//Project-File
			Robot:'Robot',
			VA:'VA',
			SCARA:'SCARA',
			SCARA3:'SCARA3',
			SCARA5:'SCARA5',
			global_Point:'Global Point'	,	
			
			//Project-Point
			Total:'Total',
			Teach:'Teach',
			Index:'Index',
			Name:'Name',
			Elbow:'Elbow',
			Shoulder:'Shoulder',			
			Flip:'Flip',
			UserID:'UserID',
			ToolID:'ToolID',	
			Coord:'Coord.',
			J4_JRC:'J4_JRC',			
			J6_JRC:'J6_JRC',
			JRC_Active:'JRC_Active',
			
			//Project-Editor
			Undo:'Undo',
			Redo:'Redo',
			Comment:'Comment',
			Uncomment:'Uncomment',
			Search:'Search',
			quick_Guide:'Quick Guide',			
			Blocks:'Blocks',
			Logic:'Logic',
			Loops:'Loops',
			Math:'Math',	
			Text:'Text.',
			Lists:'Lists',			
			Color:'Color',
			RL_Variable:'RL Variable',
			Motion:'Motion',
			IO:'IO',
			Variables:'Variables',
			Functions:'Functions',
			Lua:'Lua',
			Xml:'Xml',
						
            //Control
			Servo:'Servo',
			Home:'Home',
			Jog:'Jog',
			Parameter:'Parameter',
			
			//Control- Servo
			servo_All_Joint:'All Joint',			
			Joint1:'Joint1',
			Joint2:'Joint2',
			Joint3:'Joint3',
			Joint4:'Joint4',
			Joint5:'Joint5',
			Joint6:'Joint6',	

			//Control-Home			
			Go_Home:'Go Home',
			Home_All_Joint:'All Joint',
			Set_Home:'Set Home',

			//Control-Jog
			Cart:'Cart.',			
			Degree:'Degree',
			
			//Setting Panel 
			jog_Setting:'Jog Setting',
			robot_Setting:'Robot Setting',
			system_Setting:'System Setting',
			language_Setting:'Language Setting',
			Others:'Others',
			
			//Setting Panel-Jog Setting
			Distance:'Distance',			
			Speed:'Speed',
			OK:'OK',
			
			//Setting Panel-System Setting
			ethernet_IP:'Ethernet IP',			
			IP:'IP',
			subNet_Mask:'SubNet Mask',
			default_Gateway:'Default Gateway',
			
			//Setting Panel-Language Setting
			English:'English',
			Traditional_Chinese:'Traditional Chinese',
		    Simplified_Chinese:'Simplified Chinese',
			Japenese:'Japenese',
			Korean:'Korean',
			Spanish:'Spanish',
			Portuguese:'Portuguese',
 
			//Setting Panel-Other Setting 
			JRC_Operate:'JRC Operate',
			JRC_Inactive:'0:JRC Inactive',			
			JRC_Active:'1:JRC Active',				
			select_Near_Path:'2:Select Near Path',				
			select_Near_Path_Avoid_Joint_Limit:'3:Select Near Path & Avoid Joint Limit',
			directly_motion_by_value:'4:Directly motion by value',	

			//Current, Tool Frame, User Frame, Workspace	
			current_State:'Current State',
			tool_Frame:'Tool Frame',
			user_Frame:'User Frame',
			workspace_Frame:'Workspace Frame',
			tool_Frame_ID:'Tool Frame ID',
			user_Frame_ID:'User Frame ID',
			Workspace:'Workspace',
			Type:'Type',
			Area:'Area',
			
			// Tool Frame
			ID:'ID',
			Width:'Width',
			Height:'Height',
			Angle:'Angle',	
			Roll:'Roll',
			Pitch:'Pitch',
			Yaw:'Yaw',
			RX:'RX',
			RY:'RY',
			RZ:'RZ',
			Get:'Get',
			Set:'Set',
			Clear:'Clear',
			tool_Calculate : 'Tool Calculate',
			Error:'Error',
			Select:'Select',
				
			// User Frame
			Orthogonal:'Orthogonal',
			non_Orthogonal:'Non Orthogonal',
			Inclined:'Inclined',
			non_Inclined:'Non Inclined',
			Origin:'Origin',
			X_axis:'X axis',
			XY:'XY',
			
			//Workspce 
			Rectangle:'Rectangle',
			Cylindar:'Cylindar',
			Restricted_Area:'Restricted Area',
			Working_Area:'Working Area',
			PO:'PO',
			PX:'PX',			
			PY:'PY',
			Enable:'Enable',
			Disenable:'Disenable',

			
        }
    },
    Traditional_Chinese: {
        message: {
			//Header
			disconnect:'斷線',
			connect:'連線',
			OFF:'關閉',
			ON:'開啟',
			Pause:'暫停',
		    Run:'運行',			
			Stop:'停止',		
			Auto:'Auto',
			T1:'T1',
			T2:'T2',
			T:'T',
			U:'U',
			S:'S',
			// Header-Tool Panel
			jog_Tool:'吋動工具',
			point_Tool:'點位工具',
			execution_Tool:'執行工具',
			monitor_Tool:'監視工具',
			dio_Tool:'IO工具',
			J1:'J1',
			J2:'J2',
			J3:'J3',
			J4:'J4',
			J5:'J5',
			J6:'J6',
			MovP:'MovP',
			MovL:'MovL',
			Start:'開始',
			user_DI:'數位輸入',
			user_DO:'數位輸出',
			
			//Monitor
			Basic:'基本',
			Alarm:'警告',
			History:'歷史',
			Scope:'示波器',
			Cartesian:'卡式座標',
			
			// Monitor - Basic
			Cartesian:'卡式',
			mm:'毫米',
			Vel:'整合速度',
			X:'X',
			Y:'Y',
			Z:'Z',	
			RX:'RX',
			RY:'RY',
			RZ:'RZ',
			Joint:'關節',
			PUU:'PUU',
			Deg:'Deg',
			RPM:'RPM',
			Trq:'Trq.',
			Temp:'Temp.',	
			
			controller_Information:'控制器資訊',
			Version:'版本',
			release_Date:'發布日期',
			
			//Monitor - Alarm
			Monitor:'監控',
			Controller:'控制器',
			Group:'群組',
			Warming:'警告',
			Tips:'提示',
			Clear:'清除',
			
			//Monitor-History
			Update:'更新檔案',
			
			//Monitor-Scope
			Save:'儲存',
			Load:'下載',
			Interval:'取樣',
			CH1:'CH1',
			CH2:'CH2',
			CH3:'CH3',
			CH4:'CH4',
			CH5:'CH5',
			CH6:'CH6',
			CH7:'CH7',			
			CH8:'CH8',	

            // Project
      		Files:'檔案',
			Point:'點位',			
			Editor:'編輯RL',
			
			//Project-File
			Robot:'機器手臂',
			VA:'VA',
			SCARA:'SCARA',
			SCARA3:'SCARA3',
			SCARA5:'SCARA5',
			lobal_Point:'全域點位'	,	
			
			//Project-Point
			Total:'全部',
			Teach:'教點',
			Index:'Index',
			Name:'Name',
			Elbow:'Elbow',
			Shoulder:'Shoulder',			
			Flip:'Flip',
			UserID:'UserID',
			ToolID:'ToolID',	
			Coord:'Coord.',
			J4_JRC:'J4_JRC',			
			J6_JRC:'J6_JRC',
			JRC_Active:'JRC_Active',
			
			//Project-Editor
			Undo:'復原',
			Redo:'取消',
			Comment:'Comment',
			Uncomment:'Uncomment',
			Search:'搜尋',
			quick_Guide:'快速導覽',			
			Blocks:'Blocks',
			Logic:'Logic',
			Loops:'Loops',
			Math:'Math',	
			Text:'Text.',
			Lists:'Lists',			
			//Color:'Color',
			RL_Variable:'RL Variable',
			Motion:'Motion',
			IO:'IO',
			Variables:'Variables',
			Functions:'Functions',
			Lua:'Lua',
			Xml:'Xml',
						
            //Control
			Servo:'伺服',
			Home:'復歸',
			Jog:'吋動',
			Parameter:'參數',
			
			//Control- Servo
			servo_All_Joint:'全軸',			
			Joint1:'1軸',
			Joint2:'2軸',
			Joint3:'3軸',
			Joint4:'4軸',
			Joint5:'5軸',
			Joint6:'6軸',	

			//Control-Home			
			Go_Home:'復歸原點',
			Home_All_Joint:'All Joint',
			Set_Home:'設定原點',

			//Control-Jog
			Cart:'卡式座標',			
			Degree:'徑度',
			
			
			//Setting Panel 
			jog_Setting:'吋動設定',
			robot_Setting:'機器人設定',
			system_Setting:'系統設定',
			language_Setting:'語言設定',
			Others:'其他',
			
			//Setting Panel-Jog Setting
			Distance:'距離',			
			Speed:'速度',
			OK:'OK',
			
			//Setting Panel-System Setting
			ethernet_IP:'Ethernet IP',			
			IP:'IP',
			subNet_Mask:'子網路遮罩',
			default_Gateway:'預設閘道',
			
			//Setting Panel-Language Setting
			English:'英文',
			Traditional_Chinese:'繁體中文',
		    Simplified_Chinese:'簡體中文',
			Japenese:'日文',
			Korean:'韓文',
			Spanish:'西班牙文',
			Portuguese:'葡萄牙文',
 
			//Setting Panel-Other Setting 
			JRC_Operate:'軸旋轉模式操作',
			JRC_Inactive:'0:JRC 關閉',			
			JRC_Active:'1:JRC 啟用',				
			select_Near_Path:'2:找最小解',				
			select_Near_Path_Avoid_Joint_Limit:'3:找最小解不超出極限',
			directly_motion_by_value:'4:直接運行',
			
			
						//Current, Tool Frame, User Frame, Workspace	
			current_State:'目前狀態',
			tool_Frame:'工具座標',
			user_Frame:'使用者座標',
			workspace_Frame:'工作空間',
			tool_Frame_ID:'工具座標編號',
			user_Frame_ID:'使用者座標編號',
			Workspace:'Workspace',
			Type:'Type',
			Area:'Area',
			
			// Tool Frame
			ID:'編號',
			Width:'寬',
			Height:'高',
			Angle:'角度',	
			Roll:'Roll',
			Pitch:'Pitch',
			Yaw:'Yaw',
			RX:'RX',
			RY:'RY',
			RZ:'RZ',
			Get:'取得',
			Set:'設定',
			Clear:'清除',
			tool_Calculate:'計算',
			Error:'誤差',
			Select:'選取',
				
			// User Frame
			Orthogonal:'Orthogonal',
			non_Orthogonal:'Non Orthogonal',
			Inclined:'Inclined',
			non_Inclined:'Non Inclined',
			Origin:'Origin',
			X_axis:'X axis',
			XY:'XY',
			
			//Workspce 
			Rectangle:'Rectangle',
			Cylindar:'Cylindar',
			Restricted_Area:'Restricted Area',
			Working_Area:'Working Area',
			PO:'PO',
			PX:'PX',			
			PY:'PY',
			Enable:'Enable',
			Disenable:'Disenable',
		
        }
    }
}