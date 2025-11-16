<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面加载弹窗示例</title>
    <style>
        /* 弹窗样式 - 白色背景，居中显示 */
        #loadingPopup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-size: 48px;
            font-weight: bold;
            color: #333;
        }
        
        /* 主内容样式 - 初始隐藏 */
        #mainContent {
            display: none;
            padding: 20px;
        }
    </style>
</head>
<body>
    <!-- 加载弹窗 -->
    <div id="loadingPopup">
        中国
    </div>
    
    <!-- 页面主内容 -->
    <div id="mainContent">
        <h1>页面加载完成</h1>
        <p>弹窗已关闭，现在显示的是页面主要内容。</p>
    </div>

    <script>
        // 使用DOMContentLoaded事件确保在页面加载完成前执行
        document.addEventListener('DOMContentLoaded', function() {
            const popup = document.getElementById('loadingPopup');
            const mainContent = document.getElementById('mainContent');
            
            // 确保弹窗显示
            popup.style.display = 'flex';
            
            // 设置5秒后自动关闭弹窗
            setTimeout(function() {
                // 添加淡出效果
                popup.style.transition = 'opacity 0.5s ease';
                popup.style.opacity = '0';
                
                // 等待淡出动画完成后隐藏弹窗并显示主内容
                setTimeout(function() {
                    popup.style.display = 'none';
                    mainContent.style.display = 'block';
                }, 500);
            }, 5000); // 5000毫秒 = 5秒
        });
    </script>
</body>
</html>
