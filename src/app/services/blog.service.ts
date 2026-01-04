import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private mockPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Essential Budgeting Tips for 2024',
      slug: '10-essential-budgeting-tips-2024',
      excerpt: 'Discover the most important budgeting strategies to secure your financial future and build lasting wealth.',
      content: `
        <h2>Introduction</h2>
        <p>Managing personal finances effectively is crucial for achieving financial freedom. In this comprehensive guide, we'll explore ten essential tips that can transform your financial life.</p>
        
        <h2>1. Create a Budget and Stick to It</h2>
        <p>Budgeting is the foundation of good financial health. Track your income and expenses, categorize your spending, and identify areas where you can cut back. Use budgeting apps or spreadsheets to make this process easier.</p>
        
        <h2>2. Build an Emergency Fund</h2>
        <p>An emergency fund should cover 3-6 months of living expenses. This safety net protects you from unexpected financial shocks like job loss or medical emergencies.</p>
        
        <h2>3. Pay Off High-Interest Debt</h2>
        <p>Credit card debt and high-interest loans can drain your finances. Focus on paying these off first using strategies like the debt avalanche or debt snowball method.</p>
        
        <h2>4. Start Investing Early</h2>
        <p>Time is your greatest asset when investing. Thanks to compound interest, starting early can significantly grow your wealth over time. Consider low-cost index funds for long-term growth.</p>
        
        <h2>5. Maximize Retirement Contributions</h2>
        <p>Take advantage of employer-matched 401(k) contributions and maximize your IRA contributions. These tax-advantaged accounts are powerful tools for building retirement wealth.</p>
        
        <h2>6. Diversify Your Investments</h2>
        <p>Don't put all your eggs in one basket. Diversify across different asset classes, industries, and geographic regions to reduce risk.</p>
        
        <h2>7. Review and Adjust Regularly</h2>
        <p>Your financial situation changes over time. Review your budget, investments, and goals quarterly and make adjustments as needed.</p>
        
        <h2>8. Educate Yourself</h2>
        <p>Financial literacy is key to making informed decisions. Read books, take courses, and stay updated on financial news and trends.</p>
        
        <h2>9. Automate Your Savings</h2>
        <p>Set up automatic transfers to your savings and investment accounts. This "pay yourself first" approach ensures you save before spending.</p>
        
        <h2>10. Plan for the Long Term</h2>
        <p>Think beyond immediate needs. Plan for major life events like buying a home, children's education, and retirement. Start early and be consistent.</p>
        
        <h2>Conclusion</h2>
        <p>Implementing these personal finance tips requires discipline and commitment, but the rewards are substantial. Start with one or two strategies and gradually incorporate more as you build better financial habits.</p>
      `,
      author: 'Sarah Johnson',
      authorAvatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff',
      category: 'Budgeting',
      tags: ['Budgeting', 'Savings', 'Investing', 'Financial Planning'],
      publishedDate: '2024-01-15',
      readTime: 8,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
      featured: true
    },
    {
      id: '2',
      title: 'Smart Investment Strategies: Building Wealth in 2024',
      slug: 'smart-investment-strategies-building-wealth-2024',
      excerpt: 'Exploring proven investment strategies and modern approaches to building long-term wealth and financial security.',
      content: `
        <h2>Introduction to Smart Investing</h2>
        <p>Building wealth through smart investments is one of the most effective ways to achieve financial independence. In this comprehensive guide, we'll explore proven investment strategies that can help you grow your wealth over time.</p>
        
        <h2>Understanding Investment Basics</h2>
        <p>Before diving into specific strategies, it's important to understand the fundamentals:</p>
        <ul>
          <li><strong>Diversification:</strong> Spread your investments across different asset classes to reduce risk</li>
          <li><strong>Time Horizon:</strong> Your investment timeline determines your strategy</li>
          <li><strong>Risk Tolerance:</strong> Understand your comfort level with market fluctuations</li>
          <li><strong>Compound Interest:</strong> The power of reinvesting returns over time</li>
        </ul>
        
        <h2>Investment Options</h2>
        <p>There are various investment vehicles to consider:</p>
        <ul>
          <li><strong>Stocks:</strong> Ownership in companies with potential for high returns</li>
          <li><strong>Bonds:</strong> Fixed-income securities providing steady returns</li>
          <li><strong>Mutual Funds:</strong> Diversified portfolios managed by professionals</li>
          <li><strong>ETFs:</strong> Exchange-traded funds offering low-cost diversification</li>
          <li><strong>Real Estate:</strong> Property investments for long-term appreciation</li>
        </ul>
        
        <h2>Investment Strategies</h2>
        <p>Different strategies work for different investors:</p>
        <ul>
          <li><strong>Dollar-Cost Averaging:</strong> Invest consistently regardless of market conditions</li>
          <li><strong>Value Investing:</strong> Buy undervalued assets with strong fundamentals</li>
          <li><strong>Growth Investing:</strong> Focus on companies with high growth potential</li>
          <li><strong>Index Investing:</strong> Low-cost approach tracking market indices</li>
        </ul>
        
        <h2>Building Your Portfolio</h2>
        <p>Creating a well-balanced portfolio requires:</p>
        <ul>
          <li>Asset allocation based on your goals and risk tolerance</li>
          <li>Regular rebalancing to maintain your target allocation</li>
          <li>Tax-efficient investment strategies</li>
          <li>Long-term perspective and patience</li>
        </ul>
        
        <h2>Common Investment Mistakes</h2>
        <p>Avoid these pitfalls:</p>
        <ul>
          <li>Emotional decision-making based on market fluctuations</li>
          <li>Lack of diversification</li>
          <li>Trying to time the market</li>
          <li>Ignoring fees and expenses</li>
          <li>Not starting early enough</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Smart investing requires patience, discipline, and a long-term perspective. By following proven strategies and avoiding common mistakes, you can build substantial wealth over time. Start early, invest consistently, and let compound interest work in your favor.</p>
      `,
      author: 'Michael Chen',
      authorAvatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=6366f1&color=fff',
      category: 'Investment',
      tags: ['Investing', 'Wealth Building', 'Stocks', 'Portfolio'],
      publishedDate: '2024-01-20',
      readTime: 10,
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      featured: true
    },
    {
      id: '3',
      title: 'Digital Wallets: The Complete Guide to Mobile Payments',
      slug: 'digital-wallets-complete-guide-mobile-payments',
      excerpt: 'Everything you need to know about digital wallets, mobile payments, and the future of cashless transactions.',
      content: `
        <h2>What Are Digital Wallets?</h2>
        <p>Digital wallets are applications that store payment information on your mobile device, allowing you to make purchases without physical cards or cash. They've become increasingly popular as smartphones become ubiquitous.</p>
        
        <h2>Popular Digital Wallet Options</h2>
        <h3>Apple Pay</h3>
        <p>Available on iPhone, iPad, and Apple Watch, Apple Pay uses NFC technology and biometric authentication for secure transactions.</p>
        
        <h3>Google Pay</h3>
        <p>Google's digital wallet works on Android devices and integrates seamlessly with Google services and apps.</p>
        
        <h3>Samsung Pay</h3>
        <p>Unique for supporting both NFC and Magnetic Secure Transmission (MST), making it compatible with more payment terminals.</p>
        
        <h2>Benefits of Digital Wallets</h2>
        <ul>
          <li><strong>Convenience:</strong> Leave your physical wallet at home</li>
          <li><strong>Security:</strong> Tokenization and biometric authentication</li>
          <li><strong>Speed:</strong> Faster checkout at stores</li>
          <li><strong>Organization:</strong> Track spending in one place</li>
          <li><strong>Rewards:</strong> Easy access to loyalty programs</li>
        </ul>
        
        <h2>Security Features</h2>
        <p>Digital wallets employ multiple security layers:</p>
        <ul>
          <li>Tokenization replaces card numbers with unique tokens</li>
          <li>Biometric authentication (fingerprint, face ID)</li>
          <li>Device encryption protects stored information</li>
          <li>Transaction limits and fraud monitoring</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To set up a digital wallet:</p>
        <ol>
          <li>Download your preferred wallet app</li>
          <li>Add your credit or debit card</li>
          <li>Verify your identity</li>
          <li>Start using it at supported merchants</li>
        </ol>
        
        <h2>The Future of Payments</h2>
        <p>As digital wallets become more sophisticated, we can expect integration with cryptocurrencies, expanded merchant acceptance, and new features like budgeting tools and financial insights.</p>
      `,
      author: 'Emily Rodriguez',
      authorAvatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=10b981&color=fff',
      category: 'Digital Finance',
      tags: ['Mobile Payments', 'Digital Wallets', 'Technology', 'Convenience'],
      publishedDate: '2024-01-25',
      readTime: 6,
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
      featured: false
    },
    {
      id: '4',
      title: 'How to Build Wealth Through Smart Investing',
      slug: 'build-wealth-smart-investing',
      excerpt: 'Learn the fundamentals of investing and discover strategies to grow your wealth over time through smart investment decisions.',
      content: `
        <h2>Understanding Investment Basics</h2>
        <p>Investing is one of the most effective ways to build long-term wealth. Unlike saving, which preserves capital, investing puts your money to work, generating returns over time.</p>
        
        <h2>Start with Your Goals</h2>
        <p>Before investing, define your financial goals:</p>
        <ul>
          <li>Short-term goals (1-3 years): Emergency fund, vacation, down payment</li>
          <li>Medium-term goals (3-10 years): Home purchase, children's education</li>
          <li>Long-term goals (10+ years): Retirement, financial independence</li>
        </ul>
        
        <h2>Investment Options</h2>
        <h3>Stocks</h3>
        <p>Owning shares of companies offers potential for high returns but comes with higher risk. Consider index funds for diversification.</p>
        
        <h3>Bonds</h3>
        <p>Bonds provide steady income and lower risk. Government and corporate bonds offer different risk-return profiles.</p>
        
        <h3>Real Estate</h3>
        <p>Real estate investment trusts (REITs) allow you to invest in property without direct ownership.</p>
        
        <h3>Mutual Funds and ETFs</h3>
        <p>These funds pool money from multiple investors to buy diversified portfolios of stocks, bonds, or other assets.</p>
        
        <h2>Key Investment Principles</h2>
        <ul>
          <li><strong>Diversification:</strong> Don't put all your eggs in one basket</li>
          <li><strong>Dollar-Cost Averaging:</strong> Invest regularly regardless of market conditions</li>
          <li><strong>Long-Term Perspective:</strong> Stay invested through market volatility</li>
          <li><strong>Low Costs:</strong> Minimize fees and expenses</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Emotional investing based on market fluctuations</li>
          <li>Lack of diversification</li>
          <li>Ignoring fees and expenses</li>
          <li>Trying to time the market</li>
          <li>Not starting early enough</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>Begin with these steps:</p>
        <ol>
          <li>Build an emergency fund first</li>
          <li>Pay off high-interest debt</li>
          <li>Start with low-cost index funds</li>
          <li>Invest regularly and consistently</li>
          <li>Review and rebalance annually</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Smart investing requires patience, discipline, and a long-term perspective. Start early, invest consistently, and let compound interest work in your favor.</p>
      `,
      author: 'David Thompson',
      authorAvatar: 'https://ui-avatars.com/api/?name=David+Thompson&background=3b82f6&color=fff',
      category: 'Budgeting',
      tags: ['Investing', 'Wealth Building', 'Stocks', 'Portfolio'],
      publishedDate: '2024-02-01',
      readTime: 9,
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      featured: true
    },
    {
      id: '5',
      title: 'Cryptocurrency Investing: A Beginner\'s Guide',
      slug: 'cryptocurrency-investing-beginners-guide',
      excerpt: 'Navigate the world of cryptocurrency with confidence. Learn the basics, risks, and strategies for digital asset investing.',
      content: `
        <h2>What is Cryptocurrency?</h2>
        <p>Cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible to counterfeit. Bitcoin, created in 2009, was the first cryptocurrency, and thousands have followed.</p>
        
        <h2>Understanding Blockchain</h2>
        <p>Cryptocurrencies operate on blockchain technology—a distributed ledger that records all transactions across a network of computers. This ensures transparency and security.</p>
        
        <h2>Major Cryptocurrencies</h2>
        <h3>Bitcoin (BTC)</h3>
        <p>The original cryptocurrency, often called "digital gold" due to its store of value properties.</p>
        
        <h3>Ethereum (ETH)</h3>
        <p>More than a currency, Ethereum is a platform for decentralized applications and smart contracts.</p>
        
        <h3>Other Altcoins</h3>
        <p>Thousands of alternative cryptocurrencies offer different features and use cases.</p>
        
        <h2>Getting Started with Crypto Investing</h2>
        <ol>
          <li><strong>Research:</strong> Understand what you're investing in</li>
          <li><strong>Choose an Exchange:</strong> Select a reputable cryptocurrency exchange</li>
          <li><strong>Create a Wallet:</strong> Secure your digital assets</li>
          <li><strong>Start Small:</strong> Invest only what you can afford to lose</li>
          <li><strong>Diversify:</strong> Don't put all your money in one cryptocurrency</li>
        </ol>
        
        <h2>Risks and Considerations</h2>
        <ul>
          <li><strong>Volatility:</strong> Prices can fluctuate dramatically</li>
          <li><strong>Regulation:</strong> Regulatory changes can impact value</li>
          <li><strong>Security:</strong> Risk of hacking and fraud</li>
          <li><strong>Lack of Regulation:</strong> Less protection than traditional investments</li>
        </ul>
        
        <h2>Investment Strategies</h2>
        <ul>
          <li><strong>HODLing:</strong> Long-term holding strategy</li>
          <li><strong>Dollar-Cost Averaging:</strong> Regular purchases regardless of price</li>
          <li><strong>Active Trading:</strong> Short-term trading (higher risk)</li>
        </ul>
        
        <h2>Security Best Practices</h2>
        <ul>
          <li>Use hardware wallets for large amounts</li>
          <li>Enable two-factor authentication</li>
          <li>Keep private keys secure and offline</li>
          <li>Beware of phishing scams</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Cryptocurrency investing can be rewarding but requires education and caution. Start with small amounts, do thorough research, and never invest more than you can afford to lose.</p>
      `,
      author: 'Alex Martinez',
      authorAvatar: 'https://ui-avatars.com/api/?name=Alex+Martinez&background=8b5cf6&color=fff',
      category: 'Digital Finance',
      tags: ['Cryptocurrency', 'Bitcoin', 'Blockchain', 'Investing'],
      publishedDate: '2024-02-05',
      readTime: 7,
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      featured: false
    },
    {
      id: '6',
      title: 'Budgeting Apps That Will Transform Your Finances',
      slug: 'budgeting-apps-transform-finances',
      excerpt: 'Discover the best budgeting and personal finance apps that can help you take control of your money and achieve your financial goals.',
      content: `
        <h2>Why Use Budgeting Apps?</h2>
        <p>Budgeting apps make it easier to track spending, set financial goals, and manage your money effectively. They provide insights and automation that traditional budgeting methods lack.</p>
        
        <h2>Top Budgeting Apps</h2>
        <h3>Mint</h3>
        <p>Free app that automatically categorizes transactions, tracks bills, and provides credit score monitoring. Great for beginners.</p>
        
        <h3>YNAB (You Need A Budget)</h3>
        <p>Zero-based budgeting system that gives every dollar a job. Excellent for detailed financial planning but requires a subscription.</p>
        
        <h3>PocketGuard</h3>
        <p>Shows how much you can safely spend after accounting for bills, goals, and savings. Simple and intuitive interface.</p>
        
        <h3>Goodbudget</h3>
        <p>Digital envelope budgeting system. Perfect for couples who want to budget together.</p>
        
        <h3>Personal Capital</h3>
        <p>Comprehensive financial dashboard that tracks investments, net worth, and retirement planning alongside budgeting.</p>
        
        <h2>Features to Look For</h2>
        <ul>
          <li>Automatic transaction categorization</li>
          <li>Bill reminders and tracking</li>
          <li>Goal setting and tracking</li>
          <li>Investment portfolio tracking</li>
          <li>Bank account synchronization</li>
          <li>Security and encryption</li>
        </ul>
        
        <h2>Getting Started</h2>
        <ol>
          <li>Choose an app that fits your needs</li>
          <li>Link your bank accounts securely</li>
          <li>Set up your budget categories</li>
          <li>Review and adjust regularly</li>
          <li>Use insights to improve spending habits</li>
        </ol>
        
        <h2>Privacy and Security</h2>
        <p>When choosing a budgeting app, ensure it uses bank-level encryption, has strong privacy policies, and allows you to control your data sharing preferences.</p>
        
        <h2>Conclusion</h2>
        <p>The right budgeting app can be a game-changer for your finances. Try a few options to find what works best for your lifestyle and financial goals.</p>
      `,
      author: 'Jessica Kim',
      authorAvatar: 'https://ui-avatars.com/api/?name=Jessica+Kim&background=f59e0b&color=fff',
      category: 'Budgeting',
      tags: ['Apps', 'Budgeting', 'Tools', 'Productivity'],
      publishedDate: '2024-02-10',
      readTime: 5,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      featured: false
    },
    {
      id: '7',
      title: 'Retirement Planning: Start Early, Retire Comfortably',
      slug: 'retirement-planning-start-early',
      excerpt: 'The importance of early retirement planning and strategies to ensure a comfortable retirement regardless of when you start.',
      content: `
        <h2>Why Start Early?</h2>
        <p>Starting retirement planning early gives you the power of compound interest. The earlier you begin, the less you need to save each month to reach your retirement goals.</p>
        
        <h2>Calculate Your Retirement Needs</h2>
        <p>Most experts recommend having 70-80% of your pre-retirement income. Use retirement calculators to estimate how much you'll need based on your desired lifestyle.</p>
        
        <h2>Retirement Accounts</h2>
        <h3>401(k) Plans</h3>
        <p>Employer-sponsored plans with tax advantages. Contribute at least enough to get the full employer match—it's free money!</p>
        
        <h3>IRAs</h3>
        <p>Individual Retirement Accounts offer tax benefits. Choose between Traditional IRAs (tax-deferred) and Roth IRAs (tax-free withdrawals).</p>
        
        <h3>HSAs</h3>
        <p>Health Savings Accounts can serve as retirement vehicles with triple tax advantages.</p>
        
        <h2>Investment Strategy</h2>
        <ul>
          <li>Start with aggressive growth when young</li>
          <li>Gradually shift to more conservative investments as you age</li>
          <li>Diversify across asset classes</li>
          <li>Rebalance annually</li>
        </ul>
        
        <h2>Common Mistakes</h2>
        <ul>
          <li>Not starting early enough</li>
          <li>Not contributing enough to get employer match</li>
          <li>Being too conservative with investments</li>
          <li>Not accounting for healthcare costs</li>
          <li>Underestimating retirement expenses</li>
        </ul>
        
        <h2>Action Steps</h2>
        <ol>
          <li>Start contributing to your 401(k) immediately</li>
          <li>Open an IRA if you don't have one</li>
          <li>Increase contributions annually</li>
          <li>Review and adjust your plan regularly</li>
          <li>Consider working with a financial advisor</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>It's never too early or too late to start planning for retirement. The key is to start now, contribute consistently, and let time and compound interest work in your favor.</p>
      `,
      author: 'Robert Williams',
      authorAvatar: 'https://ui-avatars.com/api/?name=Robert+Williams&background=ef4444&color=fff',
      category: 'Investment',
      tags: ['Retirement', '401k', 'Planning', 'Future'],
      publishedDate: '2024-02-15',
      readTime: 8,
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      featured: false
    },
    {
      id: '8',
      title: 'Open Banking: The Future of Financial Services',
      slug: 'open-banking-future-financial-services',
      excerpt: 'Explore how open banking is revolutionizing financial services by giving consumers more control and access to innovative financial products.',
      content: `
        <h2>What is Open Banking?</h2>
        <p>Open banking allows third-party financial service providers to access banking data through APIs, with customer consent. This enables new financial products and services that can better serve consumers.</p>
        
        <h2>How It Works</h2>
        <p>Through secure APIs, banks share customer data (with permission) to authorized third parties, enabling:</p>
        <ul>
          <li>Aggregated account views</li>
          <li>Payment initiation services</li>
          <li>Personalized financial advice</li>
          <li>Automated savings tools</li>
        </ul>
        
        <h2>Benefits for Consumers</h2>
        <ul>
          <li><strong>Better Financial Overview:</strong> See all accounts in one place</li>
          <li><strong>Improved Services:</strong> Access to innovative financial products</li>
          <li><strong>More Control:</strong> You decide what data to share</li>
          <li><strong>Lower Costs:</strong> Increased competition drives down prices</li>
          <li><strong>Convenience:</strong> Easier account management and payments</li>
        </ul>
        
        <h2>Security and Privacy</h2>
        <p>Open banking is built on strong security foundations:</p>
        <ul>
          <li>Strong customer authentication</li>
          <li>Secure API connections</li>
          <li>Regulatory oversight</li>
          <li>Data encryption</li>
          <li>Consent management</li>
        </ul>
        
        <h2>Real-World Applications</h2>
        <ul>
          <li>Budgeting apps that connect to multiple accounts</li>
          <li>Investment platforms with automatic portfolio rebalancing</li>
          <li>Loan comparison services with instant approval</li>
          <li>Expense management tools for businesses</li>
        </ul>
        
        <h2>The Future</h2>
        <p>As open banking evolves, we can expect more personalized financial services, better fraud detection, and seamless financial experiences across platforms.</p>
        
        <h2>Conclusion</h2>
        <p>Open banking represents a fundamental shift toward more consumer-centric financial services. By understanding and embracing these changes, consumers can access better financial tools and services.</p>
      `,
      author: 'Lisa Anderson',
      authorAvatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson&background=6366f1&color=fff',
      category: 'Investment',
      tags: ['Open Banking', 'Innovation', 'APIs', 'Banking'],
      publishedDate: '2024-02-20',
      readTime: 6,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      featured: false
    }
  ];

  constructor() { }

  getAllPosts(): Observable<BlogPost[]> {
    return of(this.mockPosts);
  }

  getPostBySlug(slug: string): Observable<BlogPost | undefined> {
    const post = this.mockPosts.find(p => p.slug === slug);
    return of(post);
  }

  getPostById(id: string): Observable<BlogPost | undefined> {
    const post = this.mockPosts.find(p => p.id === id);
    return of(post);
  }

  getFeaturedPosts(): Observable<BlogPost[]> {
    const featured = this.mockPosts.filter(p => p.featured);
    return of(featured);
  }

  getPostsByCategory(category: string): Observable<BlogPost[]> {
    const posts = this.mockPosts.filter(p => p.category === category);
    return of(posts);
  }

  getRecentPosts(limit: number = 5): Observable<BlogPost[]> {
    const sorted = [...this.mockPosts].sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
    return of(sorted.slice(0, limit));
  }
}
