import java.awt.BorderLayout;
import java.awt.CardLayout;
import java.awt.EventQueue;
import java.awt.FlowLayout;
import java.awt.HeadlessException;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.Color;

public class SlideShow extends JFrame {

	//Declare Variables
	private JPanel slidePane;
	private JPanel textPane;
	private JPanel buttonPane;
	private CardLayout card;
	private CardLayout cardText;
	private JButton btnPrev;
	private JButton btnNext;
	private JLabel lblSlide;
	private JLabel lblTextArea;

	/**
	 * Create the application.
	 */
	public SlideShow() throws HeadlessException {
		initComponent();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initComponent() {
		//Initialize variables to empty objects
		card = new CardLayout();
		cardText = new CardLayout();
		slidePane = new JPanel();
		textPane = new JPanel();
		textPane.setBackground(Color.BLUE);
		textPane.setBounds(5, 470, 790, 50);
		textPane.setVisible(true);
		buttonPane = new JPanel();
		btnPrev = new JButton();
		btnNext = new JButton();
		lblSlide = new JLabel();
		lblTextArea = new JLabel();

		//Setup frame attributes
		setSize(800, 600);
		setLocationRelativeTo(null);
		setTitle("Top 5 Destinations SlideShow");
		getContentPane().setLayout(new BorderLayout(10, 50));
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		//Setting the layouts for the panels
		slidePane.setLayout(card);
		textPane.setLayout(cardText);
		
		//logic to add each of the slides and text
		for (int i = 1; i <= 5; i++) {
			lblSlide = new JLabel();
			lblTextArea = new JLabel();
			lblSlide.setText(getResizeIcon(i));
			lblTextArea.setText(getTextDescription(i));
			slidePane.add(lblSlide, "card" + i);
			textPane.add(lblTextArea, "cardText" + i);
		}

		getContentPane().add(slidePane, BorderLayout.CENTER);
		getContentPane().add(textPane, BorderLayout.SOUTH);

		buttonPane.setLayout(new FlowLayout(FlowLayout.CENTER, 20, 10));

		btnPrev.setText("Previous");
		btnPrev.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				goPrevious();
			}
		});
		buttonPane.add(btnPrev);

		btnNext.setText("Next");
		btnNext.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				goNext();
			}
		});
		buttonPane.add(btnNext);

		getContentPane().add(buttonPane, BorderLayout.SOUTH);
	}

	/**
	 * Previous Button Functionality
	 */
	private void goPrevious() {
		card.previous(slidePane);
		cardText.previous(textPane);
	}
	
	/**
	 * Next Button Functionality
	 */
	private void goNext() {
		card.next(slidePane);
		cardText.next(textPane);
	}

	/**
	 * Method to get the images
	 */
	private String getResizeIcon(int i) {
		String image = ""; 
		if (i==1){
			image = "<html><body><img width= '800' height='500' src='" + getClass().getResource("/resources/austria.jpg") + "'</body></html>"; // changed image to reflect change - image from Leonhard Niederwimmer
		} else if (i==2){
			image = "<html><body><img width= '800' height='500' src='" + getClass().getResource("/resources/india.jpg") + "'</body></html>"; // changed image to reflect change - image from ELG21
		} else if (i==3){
			image = "<html><body><img width= '800' height='500' src='" + getClass().getResource("/resources/ranch - FotoRieth.jpg") + "'</body></html>"; // changed image to reflect change - image from Foto Rieth
		} else if (i==4){
			image = "<html><body><img width= '800' height='500' src='" + getClass().getResource("/resources/thailand.jpg") + "'</body></html>"; // image changed to reflect new change - image from Sharonang
		} else if (i==5){
			image = "<html><body><img width= '800' height='500' src='" + getClass().getResource("/resources/wellness clinic spain - Laykan.jpg") + "'</body></html>"; // image changed to reflect change image from Laykan
		}
		return image;
	}
	
	/**
	 * Method to get the text values
	 */
	private String getTextDescription(int i) {
		String text = ""; 
		if (i==1){
			text = "<html><body><font size='5'  color='black'>#1 VivaMayr – Maria Wörth, Austria .</font> <br><font color='yellow'>A medical spa that is located in rustic Austria that focuses on health and detox</body></html>"; // changed title and description to reflect new places also changed color of text to make it easier on eyes 
		} else if (i==2){
			text = "<html><body><font size='5'  color='black'>#2 Ananda in the Himalayas, India .</font> <br><font color='yellow'>A retreat that focues on natural healing an yoga with scenic views to restore balance</body></html>"; // changed title and description to reflect new places also changed color of text to make it easier on eyes
		} else if (i==3){
			text = "<html><body><font size='5'  color='black'>#3 The Ranch Malibu – California, USA .</font> <br><font color='yellow'>A rural retreat that focuses on organic food and wellness to heal the body</body></html>"; /// changed title and description to reflect new places also changed color of text to make it easier on eyes
		} else if (i==4){
			text = "<html><body><font size='5'  color='black'>#4 Kamalaya – Koh Samui, Thailand .</font> <br><font color='yellow'>A beach resort that focuses on healing the body through detox and relaxation</body></html>";// changed title and description to reflect new places also changed color of text to make it easier on eyes
		} else if (i==5){
			text = "<html><body><font size='5'  color='black'>#5 Sha Wellness Clinic – Alicante, Spain .</font> <br><font color='yellow'>A retreat in rustic spain that utilizes all natural meals and detox methods to restore the body</body></html>"; // changed title and description to reflect new places also changed color of text to make it easier on eyes
		}
		return text;
	}
	
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {

			@Override
			public void run() {
				SlideShow ss = new SlideShow();
				ss.setVisible(true);
			}
		});
	}
}