document.addEventListener('DOMContentLoaded', function() {
    // タブ切り替え機能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 現在のアクティブなタブをリセット
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // クリックされたタブをアクティブに
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
    
    // スクロールアニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // 要素を監視対象に追加
    document.querySelectorAll('.step, .info-card, .disadvantage-item').forEach(el => {
        observer.observe(el);
    });
    
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // カードのホバーエフェクト強化
    const cards = document.querySelectorAll('.info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) c.style.opacity = '0.7';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach(c => c.style.opacity = '1');
        });
    });
    
    // ヒーローセクションのパララックス効果
    const hero = document.querySelector('.hero');
    const heroIcon = document.querySelector('.hero-icon');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY < window.innerHeight) {
            heroIcon.style.transform = `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`;
        }
    });
});
